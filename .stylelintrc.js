module.exports = {
  extends: [
    'stylelint-config-recommended', // configure for css
    'stylelint-config-recommended-scss', // configure for SCSS
    'stylelint-config-recommended-vue', // add overrides for .Vue files
    'stylelint-config-recess-order', // use the recess order for properties
    'stylelint-config-css-modules', // configure for CSS Modules methodology
    'stylelint-config-prettier', // turn off any rules that conflict with Prettier],
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.svg'],
  rules: {
    // recommended rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'function-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'scss/at-extend-no-missing-placeholder': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
}