import TopSelling from '@/components/home/TopSelling';
import Hero from '@/components/home/Hero';
import NewProducts from '@/components/home/NewProducts';
import WeeklyDiscount from '@/components/home/WeeklyDiscount';
import Covid19 from '@/components/home/Covid19';

function Home() {
  return (
    <>
      <Hero />
      <NewProducts />
      <WeeklyDiscount />
      <TopSelling />
      <Covid19 />
    </>
  );
}

export default Home;
