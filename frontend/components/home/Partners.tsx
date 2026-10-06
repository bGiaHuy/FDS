import Image from 'next/image';

export default function Partners() {
  return <section id="partners" className="ed-section ed-shell ed-partners" aria-labelledby="partners-title">
    <h2 id="partners-title">Đơn vị đồng hành</h2>
    <ul className="ed-partner-list">
      <li>
        <a href="https://daihoc.fpt.edu.vn/" target="_blank" rel="noopener noreferrer" className="ed-partner">
          <div className="ed-partner-logo ed-partner-logo--fpt"><Image src="/fds/partners/fpt-university.png" alt="FPT Education" width={330} height={93} unoptimized className="ed-partner-fpt" /></div>
        </a>
      </li>
      <li>
        <div className="ed-partner">
          <div className="ed-partner-logo"><Image src="/fds/partners/pdp.png" alt="Logo PDP" width={152} height={47} unoptimized className="ed-partner-pdp" /></div>
        </div>
      </li>
    </ul>
  </section>;
}
