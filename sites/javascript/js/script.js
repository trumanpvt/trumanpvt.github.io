function fib(n) {
	if (n == 1 || n == 2) return 1;
    for (var a = 1, b = 1, i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }

    return c;
}

alert(fib(2));