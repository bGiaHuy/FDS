export default function NamAchievements() {
  return <div className="people-nam-achievements">
    <p>Nguyễn Thế Nam là cựu Phó Chủ nhiệm và founder của FDS. Khi CLB đăng bài vinh danh, anh là một trong 1.650 Kaggle Competition Master trên toàn thế giới.</p>
    <p>Danh hiệu Master đòi hỏi ít nhất 1 huy chương Vàng và 2 huy chương Bạc tại các cuộc thi khoa học dữ liệu trên Kaggle. Với một cuộc thi có 2.000 đội, chỉ khoảng 14 đội dẫn đầu — 0,7% — giành được huy chương Vàng.</p>
    <p>Thành tích của anh Nam gồm hạng Nhất UW-Madison GI Tract Image Segmentation, hạng 6 RSNA-MICCAI Brain Tumor Radiogenomic Classification và hạng 7 Sartorius – Cell Instance Segmentation, cùng nhiều huy chương Bạc.</p>
    <a className="ed-link" href="https://www.kaggle.com/progression/competitions" target="_blank" rel="noopener noreferrer">Cách Kaggle xét danh hiệu và huy chương ↗</a>

  </div>;
}

export function NamAchievementDetails() {
  return (<details className="people-saved-excerpt people-nam-full-achievements"><summary>Đọc thành tích Nguyễn Thế Nam</summary><blockquote>{`Kaggle Competition Master

Jan 2022

- Gold medal and In-the-money (1st place) in UW-Madison GI Tract Image Segmentation
- Gold medal and In-the-money (6th place) in RSNA-MICCAI Brain Tumor Radiogenomic Classification
- Gold medal (7th place) in Sartorius - Cell Instance Segmentation
- Silver medals in: VinBigData Chest X-ray Abnormalities Detection, Shopee - Price Match Guarantee, SIIM-FISABIO-RSNA COVID-19 Detection, TensorFlow - Help Protect the Great Barrier Reef, etc.

Junctionx Hanoi Hackathon - Big data track - 2nd prize

Oct 2018

Junction held a Hackathon for the first time in Vietnam with 3 tracks: Big data, Block chain and Fintech. Our registered track was Big data, which was sponsored by Viettel. In the challenge, we had to analyze sets of given data to predict customers' churn rate and payment tendency in the future. I formed a team of university friends to compete in Big data track and won the 2nd prize.

Digital Race 2nd Prize Award

Được cấp bởi FPT corporation · May 2018

Digital Race is a self-driving car contest held by FPT corporation annually. I won the 2nd prize as the leader of team Winwin Spiral

Eloquence English Speaking Contest 3rd Prize

Jun 2017

Eloquence is a speaking contest held every year by No Shy club at FPT University. This contest provides students a good chance for public speaking in English`}</blockquote></details>);
}
