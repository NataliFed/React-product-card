import { AppRouter } from './common/components';
import { HeaderFeature, FooterFeature, PageFeature } from './features'
import { ResetStyles } from './features/global';

function App() {
  return (
    <div>
      <ResetStyles />
        <HeaderFeature />
        <PageFeature>
          <AppRouter />
        </PageFeature>
        <FooterFeature />
    </div>
  );
}

export default App;
