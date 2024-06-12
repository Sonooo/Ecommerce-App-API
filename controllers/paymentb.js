const braintree = require("braintree");



var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "sdg9js5g29688ggf",
    publicKey: "22c8tpmrgx232dgz",
    privateKey: "ad9c9313c44c373dc6abaad7370b971e"
});



exports.getToken = (req, res) => {

    gateway.clientToken.generate({},
        function (err, response) {

            if (err) {
                res.status(500).send(err)
            } else {
                res.send(response)
            }


        });

}

// exports.getToken = (req, res) => {
//     gateway.clientToken.generate({
//     }, (err, response) => {
//         if (response) {
//             res.status(200).send(response)
//         }
//     });
// }



exports.processPayment = (req, res) => {

    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheClient = req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
            submitForSettlement: true
        }
    }, (err, result) => {
        if (err) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    });
}