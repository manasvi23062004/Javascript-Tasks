let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

document.getElementById("purchase-btn").addEventListener("click", () => {
    const cashInput = parseFloat(document.getElementById("cash").value);
    const changeDue = document.getElementById("change-due");

    if (cashInput < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cashInput === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let change = cashInput - price;
    let changeArray = [];
    const cidCopy = JSON.parse(JSON.stringify(cid));

    const denominationValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };

    let totalCid = cid.reduce((sum, denom) => sum + denom[1], 0);
    totalCid = Math.round(totalCid * 100) / 100;

    for (let i = cid.length - 1; i >= 0; i--) {
        let denomName = cid[i][0];
        let denomTotal = cid[i][1];
        let denomValue = denominationValues[denomName];
        let denomChange = 0;

        while (change >= denomValue && denomTotal > 0) {
            change -= denomValue;
            denomTotal -= denomValue;
            denomChange += denomValue;
            change = Math.round(change * 100) / 100;
        }

        if (denomChange > 0) {
            changeArray.push([denomName, denomChange]);
            cid[i][1] = denomTotal;
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        cid = cidCopy; // Revert to original cid
    } else if (totalCid === cashInput - price) {
        changeArray = changeArray.reverse();
        changeDue.textContent = `Status: CLOSED ${changeArray.map(denom => `${denom[0]}: $${denom[1].toFixed(2)}`).join(" ")}`;
    } else {
        changeDue.textContent = `Status: OPEN ${changeArray.map(denom => `${denom[0]}: $${denom[1].toFixed(2)}`).join(" ")}`;
    }
});

