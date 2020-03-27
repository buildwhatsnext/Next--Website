import React from 'react';
import { ProjectList } from './project.item';

export default function ProjectOverviewPage() {
  return (
    <div className="page page__project">
      <div className="page__project__items">
        <ProjectList />
      </div>
    </div>
  )
}