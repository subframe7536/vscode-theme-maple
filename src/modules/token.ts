import type { TokenColor } from '../type'
import type { Path } from 'object-path-access'

import { pathGet } from 'object-path-access'

import { parseColor } from '../util'

const fontStyles = ['italic', 'bold', 'underline', 'strikethrough'] as const

type Token = {
  name?: string
  scope: string | string[]
  foreground?: string
  fontStyle?: string
}[]

type SemanticTokenColors = Record<string, string | {
  foreground?: string
  italic?: boolean
  bold?: boolean
  strikethrough?: boolean
  underline?: boolean
}>

function font(...styles: (typeof fontStyles[number])[] | []) {
  return styles.slice(0, 4)
    .filter(Boolean)
    .sort((a, b) => fontStyles.indexOf(a) - fontStyles.indexOf(b))
    .join(' ')
}

export function generateTokenColor(tokens: TokenColor, plainColor: string) {
  const maple = (
    key: Path<typeof tokens>,
    alpha?: number,
  ) => parseColor(pathGet(tokens, key) as string, alpha)

  const token: Token = [
    {
      scope: [
        'comment',
        'string.comment',
        'comment.line',
        'punctuation.definition.comment',
      ],
      foreground: maple('comment'),
    },
    {
      scope: [
        'delimiter.bracket',
        'delimiter',
        'invalid.illegal.character-not-allowed-here.html',
        'keyword.operator.rest',
        'keyword.operator.spread',
        'keyword.operator.type.annotation',
        'keyword.operator.relational',
        'keyword.operator.assignment',
        'meta.tag.block.any.html',
        'meta.tag.inline.any.html',
        'meta.tag.structure.input.void.html',
        'meta.type.annotation',
        'meta.embedded.block.github-actions-expression',
        'storage.type.function.arrow',
        'keyword.operator.type',
        'meta.objectliteral.ts',
      ],
      foreground: maple('operator'),
    },
    {
      scope: [
        'punctuation',
        'meta.brace',
        'meta.attribute punctuation.separator',
      ],
      foreground: maple('punctuation'),
    },
    // , ;
    {
      scope: [
        'punctuation.terminator',
        'punctuation.separator',
      ],
      foreground: maple('punctuation', 0.8),
    },
    {
      scope: [
        'constant',
        'support.constant',
        'entity.name.constant',
        'variable.language',
        'meta.definition.variable',
      ],
      foreground: maple('constant'),
    },
    {
      scope: [
        'entity',
        'entity.name',
        'variable.parameter.function',
        'meta.body.function.definition.special',
        'support.function',
        'meta.function',
        'meta.function-call.python',
      ],
      foreground: maple('function'),
    },
    {
      scope: [
        'entity.name.tag',
        'tag.html',
      ],
      foreground: maple('htmlTag'),
    },
    {
      scope: 'entity.name.function',
      foreground: maple('function'),
    },
    {
      scope: [
        'keyword',
        'storage.type.java',
        'entity.name.package',
        'entity.name.import',
        'keyword.operator.expression.infer',
        'keyword.operator.expression.is.ts',
        'keyword.control.satisfies',
        'keyword.control.as.ts',
      ],
      foreground: maple('keyword.normal'),
    },
    {
      scope: [
        'storage.type.annotation.java',
      ],
      foreground: maple('java.annotation'),
      fontStyle: font(),
    },
    {
      scope: [
        'storage',
        'storage.type',
        'support.type.builtin',
      ],
      foreground: maple('builtin'),
    },
    {
      scope: [
        'constant.language.undefined',
        'constant.language.null',
        'constant.language.nullptr',
      ],
      foreground: maple('keyword.alt'),
      fontStyle: font('italic'),
    },
    {
      scope: [
        'support.type.primitive',
        'support.type.builtin',
      ],
      fontStyle: font('bold'),
    },
    {
      scope: [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
        'meta.attribute-selector.scss',
        'entity.name.import.go',
      ],
      foreground: maple('string'),
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      foreground: maple('string', 0.7),
    },
    {
      scope: 'support',
      foreground: maple('property.normal'),
    },
    {
      scope: [
        'property',
        'meta.property-name',
        'meta.attribute',
        'meta.object-literal.key',
        'attribute.name',
        'entity.other.attribute-name',
        'variable.other.object.property',
        'variable.other.property',
      ],
      foreground: maple('property.normal'),
    },
    {
      scope: [
        'entity.name.tag.yaml',
        'meta.attribute entity.other.attribute-name.html',
        'source.css entity.other.attribute-name',
        'source.css support.type.property-name.media',
        'entity.other.attribute-name.tsx',
        'entity.other.attribute-name.js',
        'entity.other.attribute-name.xml',
      ],
      foreground: maple('parameter'),
    },
    {
      scope: [
        'source.css support.type.property-name',
      ],
      foreground: maple('property.declaration'),
    },
    {
      scope: [
        'variable',
        'identifier',
        'constant.other.table-name',
        'invalid.deprecated.entity.other.attribute-name.html',
        'support.type.property-name.json',
        'support.type.property-name.toml',
        'support.type.property-name.array.toml',
        'keyword.other.definition.ini',
        'variable.other.normal.shell',
        'meta.var',
      ],
      foreground: maple('variable.local'),
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type.instance.jsdoc',
      ],
      foreground: maple('type.primitive'),
    },
    {
      scope: [
        'entity.name.type.parameter',
      ],
      foreground: maple('type.parameter'),
      fontStyle: font('bold'),
    },
    {
      scope: [
        'entity.name.type.parameter.cpp',
        'entity.name.type.ts',
      ],
      foreground: maple('type.normal'),
    },
    {
      scope: [
        'meta.type keyword.operator.expression.typeof',
        'meta.type keyword.operator.expression.keyof',
      ],
      foreground: maple('keyword.normal'),
      fontStyle: font('italic'),
    },
    {
      scope: 'namespace',
      foreground: maple('namespace'),
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      foreground: maple('operator'),
    },
    {
      scope: 'invalid',
      fontStyle: font('strikethrough'),
      foreground: maple('error'),
    },
    {
      scope: 'message.error',
      foreground: maple('error'),
    },
    {
      scope: 'string variable',
      foreground: maple('string'),
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      foreground: maple('regex'),
    },
    {
      scope: 'string.regexp punctuation.definition.string',
      fontStyle: font('bold'),
    },
    {
      scope: [
        'keyword.control.anchor.regexp',
        'storage.modifier.reference',
      ],
      fontStyle: font(),
    },
    {
      scope: 'punctuation.definition.character-class.regexp',
      foreground: maple('punctuation'),
    },
    {
      scope: [
        'string.regexp.character-class',
        'constant.character.escape',
        'constant.other.character-class.regexp',
        'string.regexp string.regexp.arbitrary-repitition',
        'string.regexp constant.character.escape',
        'constant.other.placeholder',
      ],
      foreground: maple('escape'),
    },
    {
      scope: [
        'constant.numeric',
        'constant.numeric.hex storage.type.number',
        'number',
      ],
      foreground: maple('number'),
      fontStyle: font(),
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
        'punctuation.definition.entity.css',
      ],
      foreground: maple('css.pseudo'),
    },
    {
      scope: [
        'source.css variable',
      ],
      foreground: maple('css.variable'),
    },
    {
      scope: [
        'keyword.other.unit',
        'punctuation.definition.constant.css',
      ],
      foreground: maple('css.unit'),
    },
    {
      scope: [
        'source.css support.function',
      ],
      foreground: maple('css.function'),
    },
    {
      scope: [
        'constant.language.boolean',
        'constant.language',
      ],
      foreground: maple('boolean'),
    },
    {
      // todo))
      scope: 'meta.module-reference',
      foreground: maple('function'),
    },
    {
      scope: 'entity.name.section',
      foreground: maple('keyword.normal'),
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      foreground: maple('punctuation'),
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      fontStyle: font('bold'),
      foreground: maple('markdown.title'),
    },
    {
      scope: 'markup.quote',
      foreground: maple('markdown.quotes'),
    },
    {
      scope: 'markup.italic',
      fontStyle: font('italic'),
      foreground: maple('markdown.italic'),
    },
    {
      scope: 'markup.bold',
      fontStyle: font('bold'),
      foreground: maple('markdown.bold'),
    },
    {
      scope: [
        'markup.inline.raw',
        'fenced_code.block.language.markdown',
        'fenced_code.block.language',
      ],
      foreground: maple('markdown.code'),
    },
    {
      scope: [
        'markup.deleted',
        'punctuation.definition.deleted',
      ],
      foreground: maple('diff.deleted'),
    },
    {
      scope: [
        'markup.inserted',
        'punctuation.definition.inserted',
      ],
      foreground: maple('diff.inserted'),
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      foreground: maple('diff.changed'),
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      foreground: maple('comment'),
    },
    {
      scope: 'meta.diff.range',
      foreground: maple('diff.range'),
      fontStyle: font('bold'),
    },
    {
      scope: 'meta.diff.header',
      foreground: maple('diff.header'),
    },
    // todo))
    {
      scope: 'meta.separator',
      fontStyle: font('bold'),
      foreground: maple('function'),
    },
    // todo))
    {
      scope: 'meta.output',
      foreground: maple('function'),
    },
    {
      scope: [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ],
      foreground: maple('operator'),
    },
    {
      scope: 'brackethighlighter.unmatched',
      foreground: maple('error'),
    },
    {
      scope: [
        'constant.other.reference.link',
        'string.other.link',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'markup.heading.setext',
      ],
      foreground: maple('link'),
    },
    {
      scope: [
        'string.other.link.description',
        'string.other.link.title',
      ],
      foreground: maple('string'),
    },
    {
      scope: [
        'variable.other.link.underline',
      ],
      fontStyle: font('underline'),
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      foreground: maple('link'),
      fontStyle: font('underline'),
    },
    {
      scope: [
        'variable.parameter',
        'variable.other.jsdoc',
        'meta.import variable',
      ],
      foreground: maple('parameter'),
    },
    {
      scope: [
        'type.identifier',
        'entity.other.inherited-class',
        'entity.name.type.class',
        'entity.name.type.module',
        'meta.parameter.initialization',
      ],
      foreground: maple('class'),
    },
    {
      scope: [
        'entity.name.section.group-title',
        'support.type.property-name.table.toml',
      ],
      foreground: maple('keyword.normal'),
    },
    {
      scope: [
        'support.class.component.js',
        'support.class.component.ts',
        'support.class.component.jsx',
        'support.class.component.tsx',
        'support.class.component.vue',
        'support.class.component.svelte',
        'support.class.component.astro',
      ],
      foreground: maple('js.component'),
    },
    {
      scope: [
        'meta.fstring.python constant.character.format.placeholder',
      ],
      foreground: maple('python.fstring'),
    },
    {
      scope: [
        'invalid.illegal.unrecognized-tag.html',
      ],
      fontStyle: font(),
    },
    {
      scope: [
        'keyword.control.directive',
        'keyword.control.import',
        'keyword.control.from',
        'keyword.control.export',
        'keyword.package',
        'keyword.other.package',
        'keyword.import',
        'meta.use.rust keyword',
        'variable.language.this',
        'variable.language.super',
        'keyword.operator.new',
        'keyword.control.trycatch',
        'storage.modifier.package',
        'storage.modifier.import',
        'keyword.operator.expression.import',
        'source.css keyword.other.important',
        'keyword.other.using',
        'keyword.control.at-rule.import.css',
        'keyword.control.at-rule.import.scss',
        'keyword.control.at-rule.import.less',
      ],
      foreground: maple('keyword.alt'),
    },
    {
      scope: 'keyword.control.import.python',
      foreground: maple('keyword.normal'),
    },
    {
      scope: 'keyword.control.ternary.java',
      foreground: maple('keyword.alt'),
      fontStyle: font(),
    },
    {
      scope: [
        'keyword.control',
        'keyword.function',
        'keyword.operator.borrow.and.rust',
        'storage.type',
        'storage.modifier',
        'variable.language.this',
      ],
      fontStyle: font('italic'),
    },
    {
      scope: 'source.go storage.type',
      fontStyle: font(),
    },
    {
      scope: 'keyword.channel.go',
      fontStyle: font('bold'),
    },
    {
      scope: [
        'storage.type.function.arrow',
      ],
      fontStyle: font(),
    },
    {
      scope: [
        'storage.type.java',
        'punctuation.definition.string.template',
      ],
      fontStyle: font('bold'),
    },
    // java
    {
      scope: [
        'source.java storage.type.primitive',
      ],
      fontStyle: font('bold'),
    },
    {
      scope: [
        'source.java variable.parameter',
      ],
      fontStyle: font('underline'),
    },
    {
      scope: [
        'storage.type.object.array.java',
        'meta.class.java storage.type.java',
        'entity.name.type.class.java',
      ],
      foreground: maple('java.class'),
      fontStyle: font('bold'),
    },
    {
      scope: [
        'entity.name.namespace',
      ],
      foreground: maple('java.import'),
    },
    {
      scope: [
        'meta.jsx.children',
      ],
      foreground: plainColor,
    },
    {
      scope: [
        'invalid.illegal.character-not-allowed-here.html',
        'invalid.deprecated.entity.other.attribute-name.html',
      ],
      fontStyle: font(),
    },
  ]
  return {
    semanticHighlighting: true,
    semanticTokenColors: {
      'parameter': {
        foreground: maple('parameter'),
        underline: true,
      },
      'property.declaration': maple('property.declaration'),
      'property.readonly': maple('property.normal'),
      'property.defaultLibrary': maple('property.defaultLib'),
      'interface': {
        foreground: maple('interface.normal'),
        italic: true,
      },
      'interface.defaultLibrary': {
        foreground: maple('interface.defaultLib'),
        bold: true,
      },
      'variable.defaultLibrary': maple('variable.defaultLib'),
      'type': maple('type.normal'),
      'type.defaultLibrary': maple('type.defaultLib'),
      'function': maple('function'),
      'function.defaultLibrary': {
        bold: true,
      },
      'function.builtin': {
        bold: true,
      },
      'namespace': {
        foreground: maple('namespace'),
        bold: true,
      },
      'struct': maple('class'),
      'class': {
        foreground: maple('class'),
        italic: false,
        bold: false,
      },
      'class.defaultLibrary': {
        bold: true,
      },
      'class.builtin': {
        bold: true,
      },
      // python types
      'builtinConstant.typeHint': {
        bold: true,
      },
      'class.typeHint': {
        foreground: maple('type.primitive'),
        bold: true,
      },
      'selfParameter': {
        foreground: maple('keyword.alt'),
        italic: true,
        underline: false,
      },
      'selfKeyword': {
        foreground: maple('keyword.alt'),
        italic: true,
        underline: false,
      },
      'enum': maple('enum'),
      'enumMember': maple('property.declaration'),
      // rust cfg
      'builtinAttribute': maple('parameter'),
      'tomlTableKey': maple('parameter'),
      'enum.defaultLibrary': {
        foreground: maple('interface.defaultLib'),
        bold: true,
      },
      'enumMember.defaultLibrary': {
        foreground: maple('interface.defaultLib'),
        bold: true,
      },
      '*.static': {
        italic: true,
      },
      '*.async': {
        bold: true,
      },
    } satisfies SemanticTokenColors,
    tokenColors: token.map(({ scope, fontStyle, foreground, name }) => ({
      name,
      scope,
      settings: { foreground, fontStyle },
    })),
  }
}
