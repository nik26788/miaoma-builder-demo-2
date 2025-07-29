export default {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            extends: ['stylelint-config-recommended-vue']
        }
    ]
}
