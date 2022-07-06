import styled from "styled-components"
import Image from 'next/image'

function SocialLinks() {
  return (
    <div className="flex flex-col items-center pl-6 w-min">
      <a href="https://github.com/hys25" target="_blanc" alt="github" className="mb-4 h-6 w-6">
        <Image width='24px' height='24px' src='/link-github.png' alt="github"></Image>
      </a>
      <a href="https://www.linkedin.com/in/halyna-yavtushenko/" target="_blanc" alt="linkedin" className="mb-4 h-6 w-6">
        <Image width='20px' height='20px' src='/link-linkedin.png' alt="linkedin" className="h-5 w-5"></Image>
      </a>
    </div>

  );
}

export default SocialLinks;