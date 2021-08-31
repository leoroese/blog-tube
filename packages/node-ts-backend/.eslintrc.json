{
    "env": {
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jest/recommended",
        "plugin:promise/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.eslint.json"
    },
    "plugins": [
        "@typescript-eslint",
        "eslint-comments",
        "jest",
        "promise",
        "import",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true,
                "variables": true
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true,
                "variables": true,
                "typedefs": true
            }
        ],
        "import/no-extraneous-dependencies": "off"
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    }
}