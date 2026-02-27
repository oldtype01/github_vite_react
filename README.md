# github_vite_react

Vite + React(JavaScript)로 만든 앱. GitHub Pages로 배포된다.

## 기술 스택

- **빌드 도구**: Vite 7
- **UI 프레임워크**: React 19 (JavaScript)
- **패키지 매니저**: npm
- **배포**: GitHub Pages

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 [http://localhost:5173](http://localhost:5173) 에서 확인할 수 있다.

## 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (HMR 지원) |
| `npm run build` | 프로덕션 빌드 → `dist/` 생성 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run deploy` | 빌드 후 GitHub Pages 배포 |

## GitHub Pages 배포

```bash
npm run deploy
```

배포 후 1~2분 내에 아래 URL에서 확인할 수 있다.

**배포 URL**: [https://oldtype01.github.io/github_vite_react/](https://oldtype01.github.io/github_vite_react/)

> 최초 배포 후 GitHub 저장소 **Settings → Pages → Branch**를 `gh-pages`로 설정해야 한다.

## 프로젝트 구조

```
.
├── public/          # 정적 에셋
├── src/
│   ├── assets/      # 이미지 등 리소스
│   ├── App.jsx      # 루트 컴포넌트
│   └── main.jsx     # 진입점
├── index.html
├── vite.config.js   # Vite 설정 (base 경로 포함)
└── package.json
```
