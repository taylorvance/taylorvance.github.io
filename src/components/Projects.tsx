import { useState } from 'react'
import projectData from '../projects.json'
import Project from './Project'
import Tag from './Tag'

function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const featuredTags = [null, 'showcase', 'professional']

  const tagCount = (tag: string | null) => {
    if(tag === null) return projectData.length
    return projectData.filter((project) => project.tags.includes(tag)).length
  }

  const tagset = new Set<string>()
  projectData.forEach((project) => project.tags.forEach((tag) => tagset.add(tag)))
  const tags = Array.from(tagset).sort(
    (a, b) => tagCount(b) - tagCount(a) || a.localeCompare(b),
  )

  const projects = activeTag === null
    ? projectData
    : projectData.filter((project) => project.tags.includes(activeTag))

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {featuredTags.map((tag) => (
          <Tag key={tag} active={activeTag === tag} size="lg" onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
            {tag === null ? 'ALL' : tag}
            <div className="badge badge-sm badge-outline ml-1 px-1">{tagCount(tag)}</div>
          </Tag>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {[null, ...tags].map((tag) => (!featuredTags.includes(tag) &&
          <Tag key={tag} active={activeTag===tag} onClick={()=>setActiveTag(activeTag===tag?null:tag)}>
            {tag===null ? 'ALL' : tag}
            <div className="badge badge-sm badge-outline ml-1 px-1">{tagCount(tag)}</div>
          </Tag>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => <Project {...project} key={project.key} />)}
      </div>
    </>
  )
}

export default Projects
