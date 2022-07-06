import { Fragment } from "react"
import styled from "styled-components"
import Image from 'next/image'
import { StyledLink } from './link'

function DownloadCv() {
  return (
    <StyledLink href='/sample.pdf' download="cv-halyna-yavtushenko" target='_blank' alt="sample.pdf" className="flex flex-wrap justify-center items-center w-6 ml-6 text-white mb-[120px]">
      <div className="text-[12px] mb-1 uppercase font-bold">Download cv</div>
      <Image width={20} height={20} src='/download-cv.png' alt="download-cv" className="w-[20px] h-[20px] max-w-[20px] max-h-[20px]"/>
    </StyledLink>
  );
}

export default DownloadCv;