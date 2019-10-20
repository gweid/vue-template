module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        quotes: [1, 'single'], //引号类型 `` "" ''
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': 0,
        semi: [2, 'always'], //语句强制分号结尾
        'arrow-parens': [2, 'always'], //箭头函数用小括号括起来
        'no-console': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
