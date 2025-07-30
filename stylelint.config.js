export default {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            extends: ['stylelint-config-recommended-vue']
        }
    ]
    // disable the lint error for vue
    // rules: {
    //     'media-type-no-deprecated': null,
    //     'nesting-selector-no-missing-scoping-root': null,
    //     'no-invalid-position-declaration': null,
    //     'property-no-deprecated': null,
    //     'syntax-string-no-invalid': null
    // }
}
