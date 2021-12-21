import fs from 'fs'
import path from 'path'

export async function get({ query }): Promise<{ body: any }> {
  const PLUGIN_DIR = 'src/_plugins'
  const data = fs.readFileSync(
    path.join(PLUGIN_DIR, `${query.get('name')}.svelte`),
    {
      encoding: 'utf-8',
      flag: 'r',
    }
  )

  return {
    body: {
      data,
    },
  }
}
