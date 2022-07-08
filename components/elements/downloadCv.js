import { Fragment } from "react"
import styled from "styled-components"
import Image from 'next/image'
import { StyledLink } from './link'

function DownloadCv() {
  return (
    <StyledLink href='/sample.pdf' download="cv-halyna-yavtushenko" target='_blank' alt="sample.pdf" className="flex flex-wrap justify-center items-center w-6 ml-6 mb-[150px]">
      <div className="transition-colors relative text-[12px] mb-1 uppercase font-bold text-grey hover:text-white before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/download-cv-grey.svg')] before:right-[-1px] before:bottom-[-28px] before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/download-cv.png')]">Download cv</div>
    </StyledLink>
  );
}

export default DownloadCv;