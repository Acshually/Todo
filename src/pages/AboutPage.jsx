import React from 'react';

function AboutPage() {
  return (
    <div className="bg-[#172842] min-h-screen py-8 text-white">
      <div className="w-full max-w-2xl mx-auto px-4 py-3">
        <h1 className="text-2xl font-bold text-center mb-8">About This App</h1>
        <div className="bg-[#1e3a8a] p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Todo Application</h2>
          <p className="mb-4">
            This is a simple todo application built with React. It allows you to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">Add new todos</li>
            <li className="mb-2">Mark todos as complete</li>
            <li className="mb-2">Edit existing todos</li>
            <li className="mb-2">Delete todos</li>
          </ul>
          <p>
            All your todos are saved in your browser's local storage, so they persist between sessions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;