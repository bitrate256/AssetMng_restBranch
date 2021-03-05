import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// API 처리기능 개선
/*
연동시 결과는 성공or실패임.
성공/실패 여부는 json 결과의 success: true/false 로 알 수 있음.
실패시 상세 내용은 msg로 확인 가능.
모든 api가 공통 이므로 componsnt 에서 처리 하는 것이 아닌 service 공통으로 처리하는 것이 바람직함.
 */
export class ApiValidationService {
  public validateResponse(response: any): Promise<any> {
    if (response.success) {
      return Promise.resolve(response);
    }
    else {
      return Promise.reject(response);
    }
  }
}
