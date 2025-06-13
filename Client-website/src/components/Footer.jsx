import React from 'react'

const Footer = () => {
  return (
 <footer className="bg-white shadow-sm dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl px-8 py-6 flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline font-medium">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex items-center space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
