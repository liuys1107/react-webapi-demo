import React from "react";
import Recorder from '../utils/recorder';
import readAsDataURL from '../utils/readAsDataURL';
import ASRConfig from '../api/asr-config';

interface AppProps {
  /**
   * 控制点击开始录音和结束录音
   */
  recordFlag?: boolean;
}

export default class App extends React.Component<AppProps, AppProps> {
  private recorder: null;
  private audio: HTMLAudioElement
  private audioData: null

  constructor(props) {
    super(props);
    this.state = {
      recordFlag: true, // 控制点击开始录音和结束录音
    }
    this.recorder = null; // 初始化对象
    this.audioData = null; // 存储音频信息
  }

  componentDidMount(): void {
    const { sampleRate, sampleBits } = ASRConfig;
    this.recorder = new Recorder({ sampleRate, sampleBits });
  }

  // 开始
  startFunc = () => {
    this.setState({
      recordFlag: false
    }, () => {
      // @ts-ignore
      this.recorder.clear();
      // @ts-ignore
      this.recorder.start();
    });
  };

  // 结束
  endFunc = () => {
    this.setState({
      recordFlag: true
    }, () => {
      // @ts-ignore
      this.recorder.stop();
      // @ts-ignore
      this.recorder.getSource().then(data => {
        readAsDataURL(data).then(data => {
          this.audioData = data
          console.log(data, 'data');
        })
      })
    })
  };

  //播放
  playFunc = () => {
    if(this.audioData) {
      const { audio } = this;
      audio.src = this.audioData;
    }
  }

  render(): React.ReactNode {
    const { recordFlag } = this.state;
    return (
      <div>
        <div>
          <audio className="audio" ref={ref => {this.audio = ref;}} controls autoPlay/>
        </div>
        <button onClick={recordFlag ? () => {return this.startFunc()} : () => {return this.endFunc()}}>{recordFlag ? '开始' : '结束'}</button>
        <button onClick={this.playFunc}>播放</button>
      </div>
    )
  }
}
