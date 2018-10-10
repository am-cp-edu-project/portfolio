module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "rules": {
        "no-console": 0,
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};