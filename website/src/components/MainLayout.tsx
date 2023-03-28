import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAppDispatch } from '@/hooks';
import { useRouter } from 'next/router';
import { menuLinks } from '@/store/static';
import { setCurPage } from '@/store/slices/pageSlice';

const MainLayout = ({children}: any) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleChangePage = (curPageId: number) => dispatch(setCurPage({curPageId}))

  useEffect(() => {
    const link = menuLinks.find(link => link.href === router.pathname)
    if (link) {
      handleChangePage(link.id)
    }
  }, [router.pathname])

  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;