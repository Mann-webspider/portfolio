import { projects } from '@/data/projects'

export function getAllProjects() {
  return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year))
}

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category) {
  return projects.filter(project => project.category === category)
}

export function getFeaturedProjects(limit = 3) {
  return projects.slice(0, limit)
}
