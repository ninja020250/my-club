import { SpendingCard } from '@/components';
import MainLayout from '@/components/MainLayout';

function DashboardPage(props: any) {
  return (
    <MainLayout.Container>
      <SpendingCard />
    </MainLayout.Container>
  );
}

DashboardPage.propTypes = {};

export default DashboardPage;
