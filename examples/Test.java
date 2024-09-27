public class Test {

    public void processLargeDataSet() {
        // Step 1: Initialize data set
        int[] data = new int[100];
        for (int i = 0; i < data.length; i++) {
            data[i] = i * 2;
        }

        // Step 2: Perform a series of calculations
        int sum = 0;
        for (int value : data) {
            if (value % 3 == 0) {
                sum += value;
            } else if (value % 5 == 0) {
                sum -= value;
            } else {
                sum += (value * 2);
            }
        }

        // Step 3: Simulate complex logic
        for (int i = 0; i < data.length; i++) {
            for (int j = i + 1; j < data.length; j++) {
                if (data[i] % 2 == 0 && data[j] % 3 == 0) {
                    sum += data[i] * data[j];
                } else if (data[i] % 5 == 0 || data[j] % 7 == 0) {
                    sum -= data[i] * data[j];
                }
            }
        }

        // Step 4: Additional logic to process sum
        for (int i = 0; i < 20; i++) {
            sum += i * 3 - 5;
            for (int j = 0; j < 10; j++) {
                sum += (i + j) * 2;
                if (j % 2 == 0) {
                    sum -= j * i;
                }
            }
        }

        // Step 5: Print the result
        System.out.println("Final sum is: " + sum);
    }

    public static void main(String[] args) {
        LongMethodExample example = new LongMethodExample();
        example.processLargeDataSet();
    }
}
