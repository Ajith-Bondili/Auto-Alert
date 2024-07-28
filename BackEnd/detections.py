import cv2
from inference_sdk import InferenceHTTPClient
from twilio.rest import Client

# Define credentials directly (for testing purposes only; avoid this in production)
TWILIO_ACCOUNT_SID1 = 'YOUR SID HERE'
TWILIO_AUTH_TOKEN1 = 'YOUR TOKEN HERE'
TWILIO_PHONE_NUMBER1 = 'YOUR PHONE NUMBER'
RECIPIENT_PHONE_NUMBER1 = 'TWILIO PHONE NUMBER'

TWILIO_ACCOUNT_SID2 = 'YOUR SID HERE'
TWILIO_AUTH_TOKEN2 = 'YOUR TOKEN HERE'
TWILIO_PHONE_NUMBER2 = 'YOUR PHONE NUMBER''
RECIPIENT_PHONE_NUMBER2 = 'TWILIO PHONE NUMBER'

ROBOFLOW_API_KEY = 'bRSMzqFrunkJCusChNX2'

# Initialize the Twilio clients
twilio_client1 = Client(TWILIO_ACCOUNT_SID1, TWILIO_AUTH_TOKEN1)
twilio_client2 = Client(TWILIO_ACCOUNT_SID2, TWILIO_AUTH_TOKEN2)

# Initialize the Inference client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key=ROBOFLOW_API_KEY
)

total_alerts = 0  # Initialize total alerts

def monitor_car_and_person(video_path):
    global total_alerts  # Use the global total_alerts variable
    cap = cv2.VideoCapture(video_path)
    frame_number = 0

    try:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                print("End of video or error reading frame.")
                break

            if frame_number % 60 == 0:  # Process every 30th frame
                frame_path = f'YOUR FILE PATH_{frame_number}.jpg'
                cv2.imwrite(frame_path, frame)

                try:
                    result_car = CLIENT.infer(frame_path, model_id="car-models-rr7w5/1")
                    predictions_car = result_car.get("predictions", [])
                    car_positions = [(prediction.get('x'), prediction.get('y')) for prediction in predictions_car]

                    result_person = CLIENT.infer(frame_path, model_id="percounting/4")
                    predictions_person = result_person.get("predictions", [])
                    person_positions = [(prediction.get('x'), prediction.get('y')) for prediction in predictions_person]

                    for car_x, car_y in car_positions:
                        for person_x, person_y in person_positions:
                            distance = ((car_x - person_x) ** 2 + (car_y - person_y) ** 2) ** 0.5
                            if distance <= 220:
                                print("THIEF ALERT")
                                total_alerts += 1  # Increment total alerts
                                break  # Exit after finding an alert

                except Exception as e:
                    print(f"Error during inference: {e}")

            frame_number += 1

    finally:
        cap.release()
        cv2.destroyAllWindows()

def send_alerts():
    if total_alerts != 0:
        try:
            message1 = twilio_client1.messages.create(
                body="Hi, AutoAlert has detected that your car has been stolen!",
                from_=TWILIO_PHONE_NUMBER1,
                to=RECIPIENT_PHONE_NUMBER1,
            )
            print(f"Message 1 SID: {message1.sid}")

            message2 = twilio_client2.messages.create(
                body="Hi, AutoAlert has detected that your car has been stolen!",
                from_=TWILIO_PHONE_NUMBER2,
                to=RECIPIENT_PHONE_NUMBER2,
            )
            print(f"Message 2 SID: {message2.sid}")

        except Exception as e:
            print(f"Error sending message: {e}")

# Usage
video_path = 'YOUR FILE PATH'
monitor_car_and_person(video_path)

print(f"Total alerts triggered: {total_alerts}")

send_alerts()

