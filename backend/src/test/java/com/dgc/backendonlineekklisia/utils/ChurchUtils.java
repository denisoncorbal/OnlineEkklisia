package com.dgc.backendonlineekklisia.utils;

import java.util.Random;

import com.dgc.backendonlineekklisia.church.model.Church;

public class ChurchUtils {

    private final Random RANDOM = new Random(System.currentTimeMillis());

    public Church randomValidChurchWithoutId() {
        Church validChurch = new Church();
        validChurch.setName(randomString(RANDOM.nextInt(1, 80)));
        validChurch.setAbbreviation(randomString(RANDOM.nextInt(3, 10)));
        validChurch.setCnpj(randomCnpj());
        return validChurch;
    }

    public Church randomValidChurchWithtId() {
        Church validChurch = new Church();
        validChurch.setId(RANDOM.nextLong());
        validChurch.setName(randomString(RANDOM.nextInt(1, 80)));
        validChurch.setAbbreviation(randomString(RANDOM.nextInt(3, 10)));
        validChurch.setCnpj(randomCnpj());
        return validChurch;
    }

    private String randomString(int bound) {
        String randomString = "";

        for (int i = 0; i < bound; i++) {
            randomString += String.valueOf(Character.toChars(RANDOM.nextInt(65, 123)));
        }

        return randomString;
    }

    private String randomCnpj() {
        String randomCnpj = "";

        for (int i = 0; i < 14; i++) {
            randomCnpj += String.valueOf(RANDOM.nextInt(10));
        }

        return randomCnpj;
    }

}
