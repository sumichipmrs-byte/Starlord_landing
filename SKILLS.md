# design-system: 스타로드 리조트 디자인 가이드라인 (Design System & Skills)

본 문서는 스타로드 리조트 랜딩 페이지의 UX/UI 일관성을 유지하기 위한 디자인 원칙과 코드 구현 규약을 정의합니다. 모든 디자인 요소는 **MOZAIQ**의 프리미엄 감성을 계승하며, **Starlord**의 브랜드 가치를 시각화하는 데 집중합니다.

## 1. 디자인 철학 (Design Philosophy)
- **Extreme Privacy**: 소수만을 위한 독점적이고 프라이빗한 느낌을 주기 위해 넓은 여백(White Space)을 활용합니다.
- **Natural Elegance**: 인위적이지 않은 자연스러운 톤과 질감(Texture)을 사용합니다.
- **Emotional Interaction**: 정적인 페이지가 아닌, 스크롤에 따라 부드럽게 반응하는 인터랙션을 통해 몰입감을 제공합니다.

## 2. 시각적 아이덴티티 (Visual Identity)

### 2.1 컬러 시스템 (Color Tokens)
전체적으로 따뜻하고 차분한 '샌드 베이지' 톤을 베이스로 하며, 신뢰감과 고급스러움을 위해 '브론즈'와 '다크 에보니'를 포인트로 사용합니다.

| 분류 | 컬러명 | HEX | 용도 |
| :--- | :--- | :--- | :--- |
| **Base** | Sand Beige | `#F6F3EF` | 전체 배경, 배경 구분을 위한 보조색 |
| **Point** | Deep Bronze | `#96734D` | 주요 CTA 버튼, 강조 텍스트, 아이콘 |
| **Surface**| Soft Bone | `#EFEDE8` | 섹션 구분 배경, 카드 배경 |
| **Text** | Dark Ebony | `#222222` | 메인 타이틀, 본문 텍스트 |
| **Text** | Muted Grey | `#666666` | 설명글, 비활성 텍스트, 푸터 |

### 2.2 타이포그래피 (Typography)
- **Headings (Classy & Emotional)**: 
    - Font Family: `Playfair Display`, `Cormorant Garamond` (세리프)
    - Usage: 대제목, 브랜드 메시지, 섹션 타이틀
- **Body & Interface (Clear & Modern)**:
    - Font Family: `Pretendard`, `Inter` (산세리프)
    - Usage: 본문 설명글, 버튼 텍스트, 탭 메뉴, 폼 입력 필드

## 3. 핵심 UI 컴포넌트 규격 (UI Components)

### 3.1 Buttons (CTA)
- **Primary**: `Deep Bronze` 배경 + `White` 텍스트. 둥근 모서리 보다는 직각형 또는 아주 미세한 Round(4px) 적용.
- **Secondary**: `Transparent` 배경 + `Deep Bronze` 보더 + `Deep Bronze` 텍스트.
- **Interaction**: Hover 시 배경색이 조금 더 짙어지거나 미세하게 Scale Up(1.05) 효과.

### 3.2 Sections & Layout
- **Hero Section**: 상단 내비게이션은 투명(Transparent)하게 시작하여 스크롤 시 베이지색 배경으로 전환.
- **Spacing**: 섹션 사이에는 최소 `120px` 이상의 충분한 상하 간격을 두어 여백의 미를 강조.
- **Grid**: 기본 12컬럼 그리드를 사용하되, 이미지와 텍스트가 좌우로 엇갈리는 비대칭 레이아웃(Asymmetric Layout)을 활용하여 에디토리얼 느낌 연출.

## 4. 인터랙션 및 애니메이션 (Motion Guide)
- **Reveal Effect**: 요소가 화면에 들어올 때 (In-view) `opacity: 0`에서 `1`로, `translateY(30px)`에서 `0`으로 부드럽게 올라오는 효과 적용. (Duration: 0.8s, Timing: ease-out)
- **Parallax Image**: 큰 배경 이미지들에는 미세한 패럴랙스 효과를 주어 공간감 부여.
- **Smooth Scroll**: 페이지 전체에 부드러운 스크롤 감도를 적용하여 럭셔리한 대시보드/웹진 느낌 제공.

## 5. 코드 구현 가이드 (Coding Convention)

### 5.1 CSS 구조화
- 모든 디자인 토큰은 CSS Variables로 관리합니다.
```css
:root {
  --color-base: #F6F3EF;
  --color-point: #96734D;
  --color-text-main: #222222;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Pretendard', sans-serif;
  --section-padding: 120px 0;
}
```

### 5.2 Responsive Breakpoints
- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1199px (레이아웃 간소화, 폰트 사이즈 조정)
- **Mobile**: 767px 이하 (1컬럼 레이아웃, 모바일 전용 햄버거 메뉴)

## 6. 품질 체크리스트 (Quality Checklist)
- [ ] 고해상도 이미지가 기기별로 최적화되어 서빙되는가?
- [ ] 텍스트와 배경의 대비(Contrast)가 가독성을 해치지 않는가?
- [ ] 모바일에서 모든 버튼이 엄지손가락으로 터치하기 충분한 크기인가?
- [ ] 스크롤 애니메이션이 저사양 기기에서도 끊김 없이 작동하는가?
