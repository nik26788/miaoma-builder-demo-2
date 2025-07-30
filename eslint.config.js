import globals from 'globals'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import vueEslintParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        defineProps: 'readonly',
        defineEmits: 'readonly'
      }
    }
  },
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['vue3-strongly-recommended'].rules,
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'prefer-const': 'error',
      'no-console': 'error',
      'vue/valid-define-emits': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: tsParser
      }
    },
    plugins: {
      vue: pluginVue,
      'simple-import-sort': simpleImportSort
    }
  }
]
