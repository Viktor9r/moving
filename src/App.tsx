import  { useEffect } from 'react';
import './App.css';
import { DesktopLayout } from './Layouts/DesktopLayout/DesktopLayout';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ServicePage } from './Layouts/ServicePage/ServicePage';
import { AppHeader } from './Layouts/AppHeader/AppHeader';
import { useSerivcePageDataStorage } from './Storages/useServicePageDataStorage';
import { servicesList } from './resources/data/arrays';
import { useOpenQuoteDialog } from './Storages/useOpenQuoteDialog';
import { QuoteDialog } from './Layouts/Dialogs/QuoteDialog/QuoteDialog';
import { FAQPage } from './Layouts/FAQPage/FAQPage';

function App() {
  const location = useLocation()

  const { setVisibleService } = useSerivcePageDataStorage()

  useEffect(() => {
    if (location.pathname.includes('long-distance')) {
      setVisibleService(servicesList[0].id)
    }
    if (location.pathname.includes('local-moving')) {
      setVisibleService(servicesList[1].id)
    }
    if (location.pathname.includes('storage-moving')) {
      setVisibleService(servicesList[2].id)
    }
    if (location.pathname.includes('commercial-moving')) {
      setVisibleService(servicesList[3].id)
    }
    if (location.pathname.includes('special-moving')) {
      setVisibleService(servicesList[4].id)
    }
    if (location.pathname.includes('packing')) {
      setVisibleService(servicesList[5].id)
    }
  }, [location, setVisibleService]);

  const { openQuoteDialog, setOpenQuoteDialog } = useOpenQuoteDialog()

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<DesktopLayout />} />
        <Route path='/faq-page' element={<FAQPage />} />
        <Route
          path={
            '/services/long-distance-moving'
          }
          element={<ServicePage />}
        />
        <Route
          path={
            '/services/local-moving'
          }
          element={<ServicePage />}
        />
        <Route
          path={
            '/services/storage-moving'
          }
          element={<ServicePage />}
        />
        <Route
          path={
            '/services/commercial-moving'
          }
          element={<ServicePage />}
        />
        <Route
          path={
            '/services/special-moving'
          }
          element={<ServicePage />}
        />
        <Route
          path={
            '/services/packing-moving'
          }
          element={<ServicePage />}
        />
      </Routes>

      {openQuoteDialog && (
        <QuoteDialog
          open={openQuoteDialog}
          onClose={() => setOpenQuoteDialog(false)}
        />
      )}
    </div>
  );
}

export default App;
