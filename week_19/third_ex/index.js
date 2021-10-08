class Calc {
    static value() {
        this.numb1 = document.getElementById("first-number").value;
        this.numb2 = document.getElementById("second-number").value;
    }

    static sum() {
        this.value()
        return Number(this.numb1) + Number(this.numb2);
    }
    static sub() {
        this.value();
        return this.numb1 - this.numb2;
    }
    static mul() {
        this.value();
        return this.numb1 * this.numb2;
    }
    static div() {
        this.value();
        return (this.numb1 / this.numb2).toFixed(2);
    }
    static result(result) {
        document.getElementById("result").innerHTML = result;
    }
}