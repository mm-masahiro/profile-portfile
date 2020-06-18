import * as React from 'react';
import '../GlobalTopic/GlobalTopic.css'

const About = () => {
  return (
    <section className="body_main">

      <a id="about">
        <header className="body_main_header">
          <h2 className="body_main_title">About</h2>
        </header>
      </a>

      <div className="body_main_contents">
        <ul id="about_slide" className="body_main_contents_list">
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/about1.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              高校生の時にハンドボールを始め、大学生になっても部活に入って続けていました！<br />
              大学４回生の最後の大会の際の写真です。
            </span>
          </li>
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/about2.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              みずほ証券（株）に新卒で19年4月に入社しました。<br />
              営業として新規開拓に取り組んでいます。
            </span>
          </li>
        </ul>

        <div className="pointer">
          <span className="about_select current"></span>
          <span className="about_select"></span>
        </div>

        <p className="body_main_contents_text">
          こんにちは！都内で証券会社に勤めている森永 雅大と申します！岡山県出身で大学は香川大学だったのですが、支店配属が都内になり19年の4月に上京しました。
        </p>
        <p className="body_main_contents_text">
          学生の頃は、ハンドボール部に所属しており週4日以上の練習を４年間、最後までやり抜きました！また、キャプテンの経験もさせてもらい、チームの課題は何か、それを克服するためにどうすれば良いかということを常に考えながら練習に取り組みました。
        </p>
        <p className="body_main_contents_text">
          幼い頃から負けず嫌いで、自分が「負けたくない」と感じたもの（部活のレギュラー争いや、好きな教科の勉強など）に対しては、結果を残せるように努めてきました。この性格もあってか、日々自分を成長させることのできる環境に身をおきたいと考えています。
        </p>
      </div>
    </section>
  );
}

export default About
