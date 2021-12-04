# Cloud Infrastructure create an s3 bucket for a react app

[Video link](https://www.egghead.io/lessons/egghead-cloud-infrastructure-create-an-s3-bucket-for-a-react-app?pl=cloud-infrastructure-fundamentals-with-aws-ee4bb845)

<TimeStamp start="1:10" end="1:15">
  
  You can't rename an S3 bucket. So make sure you are happy with the name. 
  
</TimeStamp>

<TimeStamp start="4:20" end="4:30">
  
  ```
    "Version":"2012-10-17",
    "Statement": [
      {
        "Sid":"PublicRead",
        "Effect":"Allow",
        "Principal": "*",
        "Action":["s3:GetObject","s3:GetObjectVersion"],
        "Resource":["arn:aws:s3::::DOC-EXAMPLE-BUCKET/*"]
      }
    ]
  ```
  
</TimeStamp>