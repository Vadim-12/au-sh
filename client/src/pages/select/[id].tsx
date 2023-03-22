import React from 'react';
import {useRouter} from "next/router";
import MainLayout from "@/components/MainLayout";

const CarInfo = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <MainLayout>
      ID машины: {id}
    </MainLayout>
  );
};

  export default CarInfo;