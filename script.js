var buttons = document.querySelectorAll("button");
var result = document.querySelector("input");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "C":
                result.value = "";
                break;
            case "⌫":
                result.value = result.value.slice(0, -1);
                break;
            case "×":
                result.value = result.value + "*"
                break;
            case "÷":
                result.value = result.value + "/"
                break;
            case "%":
                // result.value = result.value + "/100*";
                result.value = result.value/100+ "*";
                break;
            case "=":
                try {
                    result.value = eval(result.value);
                } catch {
                    result.value = "error"
                }
                break;
            default:
                result.value = result.value + this.innerHTML

        }
    })
}