import { computed } from 'vue';

export function useSubmenu(menuData, activeMenu) {
  // 활성화된 메뉴 아이템을 반환하는 computed 속성
  const getActiveMenuItems = computed(() => {
    // menuData와 activeMenu가 유효한 경우 서브메뉴 항목을 반환
    return menuData && menuData[activeMenu] ? menuData[activeMenu] : [];
  });

  // 서브메뉴 이름에 따라 라우트 경로를 반환하는 함수
  const getSubmenuRoute = (submenu) => {
    return `/${submenu}`;
  };

  // 서브메뉴 클릭 시 호출되는 함수
  const submenuClick = (submenu) => {
    console.log("submenu:", submenu);
    // 여기서는 단순히 로그만 남기지만, 실제로는 라우팅 등 추가 로직을 처리
  };

  return {
    getActiveMenuItems,
    getSubmenuRoute,
    submenuClick,
  };
}
