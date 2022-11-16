import sendmail from 'sendmail';
export default async function handler(req, res) {
  console.log('api reached');
  let resp =await sendmail(
    {
      from: 'no-reply@yourdomain.com',
      to: 'kaleabtaye@gmail.com, kaleabtaye@gmail.com ',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }
    // function (err, reply) {
    //     resp=reply
    //     console.log('kk')
    //   console.log(err && err.stack);
    //   console.log(reply);
    // }
  );
  res.status(200).json({ name: 'John dDoe', answer: req.body });
}
