import React from 'react';
import SideNav from './SideNav';
import Content from './Content';

export default function Body() {
  return (
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <SideNav />
                <Content />
            </div>
        </div>
    </section>
  )
}
