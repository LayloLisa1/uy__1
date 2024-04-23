function calculateDeliveryPercentage(sent, limit = 1000) {
    if (sent === 0) {
        return "Hech qanday e-mail yuborilmagan";
    } else if (sent >= limit) {
        return "Kunlik chegaraga yetildi";
    } else {
        var percentage = (sent / limit) * 100;
        return percentage.toFixed(1) + "%";
    }
}

// Misol:
var sentEmails = 101;
var limit = 1000;
var result = calculateDeliveryPercentage(sentEmails, limit);
console.log("Natija:", result);
