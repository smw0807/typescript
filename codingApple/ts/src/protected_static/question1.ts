/**
 * x: UserA 클래스 내에서만 사용,수정 가능
 * 
필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 
x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
User의 자식들은 x와 y를 쓸 수 없습니다.
 * y: 다 사용, 수정 가능
 * z: UserA 클래스 밑 extends한 클래스에서 사용, 수정 가능
 */
class UserA {
  private static x = 10;
  public static y = 20;
  protected z = 30;

  set x(x: number) {
    this.x = x;
  }
}
