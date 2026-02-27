# github_vite_react

Vite + React(JavaScript)로 만든 앱. GitHub Pages로 배포된다.

## 기술 스택

- **빌드 도구**: Vite
- **UI 프레임워크**: React 19 (JavaScript)
- **패키지 매니저**: npm
- **배포**: GitHub Pages (`gh-pages` 브랜치)

## 주요 명령어

```bash
npm run dev       # 개발 서버 실행 (http://localhost:5173)
npm run build     # 프로덕션 빌드 → dist/ 생성
npm run preview   # 빌드 결과 로컬 미리보기
npm run deploy    # 빌드 후 GitHub Pages 배포
```

## GitHub Pages 배포 시 주의사항

- `vite.config.js`의 `base: '/github_vite_react/'`는 저장소 이름과 반드시 일치해야 한다.
  저장소 이름이 바뀌면 이 값도 함께 수정할 것.
- `npm run deploy`는 `dist/`를 `gh-pages` 브랜치로 push할 뿐,
  GitHub Pages 소스 설정(Settings → Pages → Branch)은 최초 1회 수동 설정 필요.
- 배포 후 반영까지 1~2분 소요될 수 있다.

## 배포 URL

```
https://oldtype01.github.io/github_vite_react/
```

## 업데이트 배포 흐름

```bash
git add .
git commit -m "..."
git push origin main
npm run deploy
```
