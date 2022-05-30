import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu Mono', monospace;
    button{
      font-family: 'Ubuntu Mono', monospace;
    }
  }
  #root{
    max-width: 500px;
    margin: 5px;
    overflow: hidden;
    background: #718693;
    border: 1px solid #4C5A65;
    border-radius: 10px;
  }

  

  .react-jinke-music-player-main {
    .music-player-panel {
      bottom: auto;
      top: 55px;
      left: 6px;
      background-color: rgba(0, 0, 0, 0.95);
      border-radius: 4px;

      .panel-content {
        padding-top: 5px;
        padding-bottom: 5px;

        .img-rotate {
          border: 1px solid #e7cdd2;
          animation: none;
          background-position: center center;
        }
      }
    }
    .audio-lists-panel {
      width: 500px;
      height: auto;
      left: 6px;
      right: 0;
      bottom: auto;
      top: 176px;
      transform-origin: top;
      background-color: rgba(0, 0, 0, 0.95);

      .audio-lists-panel-header-delete-btn {
        display: none;
      }

      .audio-lists-panel-content {
        height: auto;
        max-height: 188px
      }
    }

    .music-player-panel {
      height: 120px;
      max-width: 500px;

      .panel-content {
        display: flex;
        flex-direction: column;
        
        .progress-bar-content {
          display: flex !important;
          align-items: center;

          .audio-main {
            display: none;
          }
        }
      }
    }
  }
`;

export default Global;
