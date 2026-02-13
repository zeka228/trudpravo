import { QRCodeSVG } from 'qrcode.react';

export default function QRCodes() {
    return (
      <div className="qr-box">
          <div className="qr-box-wrapper">
              <QRCodeSVG value="https://zeka228.github.io/trudpravo" />
              <span className="qr-box-subtitle">Онлайн-квест</span>
          </div>
          <div className="qr-box-wrapper">
              <QRCodeSVG value="https://vk.com/wall-227359500_241" />
              <span className="qr-box-subtitle">Лекция: ОСНОВЫ<br/>Трудового права в России.</span>
          </div>
      </div>
    );
}