import * as React from 'react';
import '../GlobalTopic/GlobalTopic.css'

const Job = () => {
  return (
    <section className="body_main">
      <a id="job">
        <header className="body_main_header">
          <h2 className="body_main_title">Job</h2>
        </header>
      </a>
      <div className="body_main_contents">
        <ul id="job_slide" className="body_main_contents_list">
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/job1.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              東京という大きなマーケットで新規開拓に取り組んでいます！<br />
              大口案件を決められるように戦略を立てながら取り組んでいます。
            </span>
          </li>
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/job2.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              エンジニアへの転職をしたいと考えています！ <br />
              それに向けて現在勉強中です。
            </span>
          </li>
        </ul>
        <div className="pointer">
          <span className="job_select current"></span>
          <span className="job_select"></span>
        </div>

        <p className="body_main_contents_text">
          2019年4月にみずほ証券（株）に入社しました。都内の支店配属になり、東京という大きなマーケットの中で法人やそのオーナー・社長を主なターゲットとした新規開拓に取り組んでいます。
        </p>
        <p className="body_main_contents_text">
          新規開拓に取り組む際には、「戦略」ということを意識しながら取り組んでいます。アプローチの数だけではなく、そこに「ターゲティング」という要素も意識しながら新規開拓に取り組んでいます。
          現在はまだ、資金導入や商品販売という形で結果としては出てきてはおりませんが、大口の案件をいくつか見つけることができました。今期中に刈り取れるように今後も取り組んでいきます！
        </p>
        <p className="body_main_contents_text">
          また、自分の将来を考えていく中で、より成長性のある業界に身を置き、自分を成長させたいたいと考え始め、エンジニアへの転職を考えています。
          現在は独学であったり友人に教えてもらいながらであったりで転職に向けた準備をしており、将来的にはブロックチェーンに魅力を感じているのでその業界に携わっていきたいと考えています。
        </p>
      </div>
    </section>
  );
};

export default Job
