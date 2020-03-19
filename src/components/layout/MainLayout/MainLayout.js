import React from 'react';
import PropTypes from 'prop-types';

// styles
import '../../../styles/normalize.scss';
import '../../../styles/global.scss';
import '../../../styles/mixins.scss';
import '../../../styles/components.scss';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
