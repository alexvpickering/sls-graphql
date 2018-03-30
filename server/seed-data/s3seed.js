import s3, { Bucket } from "../utils/s3";

const s3seed = () => {
  s3
    .createBucket({ Bucket })
    .promise()
    .then(res => console.log(res))
    .catch(err => console.log(err.stack))
    .then(seedBucket());
};

const seedBucket = () => {
  const S3Objects = [
    { content: "s3thing1" },
    { content: "s3thing2" },
    { content: "s3thing3" },
    { content: "s3thing4" }
  ];

  S3Objects.forEach((S3Object, i) => {
    const params = {
      Bucket,
      Key: `s3thing${i + 1}.json`,
      Body: JSON.stringify(S3Object)
    };

    // call S3 to retrieve upload file to specified bucket
    s3
      .upload(params)
      .promise()
      .then(data => console.log("Upload Success", data.Location))
      .catch(error => console.log(error.message));
  });
};

s3seed();
