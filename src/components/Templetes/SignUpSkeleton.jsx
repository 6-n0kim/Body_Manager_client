import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

import { SignUpFormBox } from '..'

export default function SignUpSkeleton() {
  const [memberInfo, setMemberInfo] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phone: '',
    gender: '',
    height: '',
    remark: '',
    birth: '',
    profile: '',
  })

  const infoHanlder = (e, key) => {
    switch (key) {
      case 'profile':
        setMemberInfo({ ...memberInfo, [key]: e.target.files[0] })
        return
      case 'address':
        setMemberInfo({ ...memberInfo, [key]: e })
        return
      default:
        setMemberInfo({ ...memberInfo, [key]: e.target.value })
    }
  }

  const submitHanlder = () => {
    console.log(memberInfo)
    const formData = new FormData()
    Object.keys(memberInfo).forEach((el) => formData.append(el, memberInfo[el]))
    axios.post('', formData)
  }

  return (
    <SignUpSkeletonContainer>
      <SignUpFormBox
        data={memberInfo}
        inputFn={infoHanlder}
        submitFn={submitHanlder}
      />
    </SignUpSkeletonContainer>
  )
}

const SignUpSkeletonContainer = styled.main``
