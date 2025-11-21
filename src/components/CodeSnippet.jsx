import Editor from '@monaco-editor/react'

export default function CodeSnippet({ language = 'javascript', code = '// sample', height = 220 }) {
  return (
    <div className="mt-3 rounded border border-white/5 overflow-hidden">
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 13,
          lineNumbers: 'on',
          wordWrap: 'on',
          padding: { top: 10 },
          renderLineHighlight: 'line',
        }}
      />
    </div>
  )
}
